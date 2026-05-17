import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma.js";

const deliveryAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token provided" });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string; role: string };

        if (decoded.role !== "delivery") {
            return res.status(403).json({ message: "Access denied. Delivery partner only." });
        }
        const partner = await prisma.deliveryPartner.findUnique({
            where: { id: decoded.id },
        });
        if (!partner || !partner.isActive) {
            return res.status(403).json({ message: "Account is deactivated" });
        }

        req.partner = partner;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Token is not valid" });
    }
};

export default deliveryAuth;
