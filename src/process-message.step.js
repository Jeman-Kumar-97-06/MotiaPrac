import {z} from 'zod';
export const config = {
  name: 'ProcessMessage',
  type: 'event',
  subscribes: ['message.sent'],
  emits:[],
  input: z.object({body:z.string()})
};
 
export const handler = async (input, { logger }) => {
  logger.info('Processing message',input);
};