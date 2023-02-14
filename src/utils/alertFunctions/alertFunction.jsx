import { toast } from "react-hot-toast";

export const succes = (message) => {
    toast.success(message);
}

export const error = (message) => {
    toast.error(message)

}

