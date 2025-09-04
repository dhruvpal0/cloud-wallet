import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

import "dotenv/config";

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "60 s"),
});

export default ratelimit;

// await redis.set("foo", "bar");
// const data = await redis.get("foo");

// url: process.env.UPSTASH_REDIS_REST_URL,
// token: process.env.UPSTASH_REDIS_REST_TOKEN,