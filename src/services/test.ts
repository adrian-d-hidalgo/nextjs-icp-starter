import { createActor, canisterId } from "../declarations/test";

export async function makeTestActor() {
  return createActor(canisterId, {
    agentOptions: {
      host: process.env.NEXT_PUBLIC_IC_HOST,
    },
  });
}
