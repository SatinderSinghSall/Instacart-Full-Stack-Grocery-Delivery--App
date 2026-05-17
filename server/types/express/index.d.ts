import { User, DeliveryPartner } from "../../generated/prisma/client.ts";

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                isAdmin?: boolean;
            };
            partner?: DeliveryPartner;
        }
    }
}

export {};
