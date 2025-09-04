import ratelimit from "../config/upstash.js";


const rateLimiter = async (req, res, next) => {
    try {
        // here we just keep it simple.
        // in real world app you'd like to put the userid or ipAddress as your key
        const { success } = await ratelimit.limit("my-rate-limit");

        if (!success) {
            return res.status(429).json({
                message: "Too many request, please try again later!"
            });
        }
        next();
    } catch (error) {
        console.log("Rate limit error", error);
        next(error);
    }
}

export default rateLimiter;