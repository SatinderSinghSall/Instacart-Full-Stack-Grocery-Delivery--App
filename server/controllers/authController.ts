import { Request, Response } from "express";
import { prisma } from "../config/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Generate JWT token
const generateToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn: "30d" });
};

// Check if user is admin
const getAdminStatus = (email: string | null | undefined): boolean => {
    if (!email) return false;
    const adminEmails = process.env.ADMIN_EMAILS ? process.env.ADMIN_EMAILS.split(",").map((e) => e.trim().toLowerCase()) : [];
    return adminEmails.includes(email.toLowerCase());
};

// Register
// POST /api/auth/register
export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please provide all fields" });
    }

    const existingUser = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });

    if (existingUser) {
        return res.status(400).json({ message: "User already exists with this email" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: { name, email: email.toLowerCase(), password: hashedPassword },
    });

    const token = generateToken(user.id);

    const userData: any = { ...user };
    delete userData.password;
    userData.isAdmin = getAdminStatus(userData.email);

    res.status(201).json({ user: userData, token });
};

// Login
// POST /api/auth/login
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please provide email and password" });
    }

    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() }, include: { addresses: true } });

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user.id);

    const userData: any = { ...user };
    delete userData.password;
    userData.isAdmin = getAdminStatus(userData.email);

    res.json({ user: userData, token });
};
