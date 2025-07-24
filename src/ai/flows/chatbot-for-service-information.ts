'use server';
/**
 * @fileOverview Implements a chatbot flow that answers questions about AurionX's services and solutions.
 *
 * - chatbotForServiceInformation - A function that processes user queries and returns information about AurionX's services.
 * - ChatbotForServiceInformationInput - The input type for the chatbotForServiceInformation function.
 * - ChatbotForServiceInformationOutput - The return type for the chatbotForServiceInformation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotForServiceInformationInputSchema = z.object({
  query: z.string().describe('The user query about AurionX services.'),
});
export type ChatbotForServiceInformationInput = z.infer<typeof ChatbotForServiceInformationInputSchema>;

const ChatbotForServiceInformationOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
});
export type ChatbotForServiceInformationOutput = z.infer<typeof ChatbotForServiceInformationOutputSchema>;

export async function chatbotForServiceInformation(input: ChatbotForServiceInformationInput): Promise<ChatbotForServiceInformationOutput> {
  return chatbotForServiceInformationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotForServiceInformationPrompt',
  input: {schema: ChatbotForServiceInformationInputSchema},
  output: {schema: ChatbotForServiceInformationOutputSchema},
  prompt: `You are a chatbot designed to answer questions about AurionX Solutions, a software development company specializing in POS systems, management support systems, and hosted services.

  Here is some information about AurionX Solutions and their services:
  - AurionX Solutions offers POS Systems, Management Support Systems (web & standalone), and Hosted Services.
  - POS Systems include Offline/Standalone POS, Cloud-based POS, and Mobile POS solutions.
  - Management Support Systems include Vehicle Service Management, Microfinance System, Fixed Asset Management, HR or Inventory Management.
  - Custom Software Development services include web and desktop apps, API integration, and legacy system upgrades.
  - Hosting & Maintenance services include cloud hosting packages (AWS, cPanel, etc.) and system monitoring and yearly support.

  Answer the following question based on the information provided above. If the question is not related to AurionX Solutions' services, respond that you are designed to answer question about AurionX. Keep your answer short and to the point.

  Question: {{{query}}}`,
});

const chatbotForServiceInformationFlow = ai.defineFlow(
  {
    name: 'chatbotForServiceInformationFlow',
    inputSchema: ChatbotForServiceInformationInputSchema,
    outputSchema: ChatbotForServiceInformationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
