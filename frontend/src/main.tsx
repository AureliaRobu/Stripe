import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

export const stripePromise = loadStripe('pk_test_51PqwqKAbOolguzqaGf0UrliXnUg3LozQ0zLLp9Us5IycBh3mDnq9iTzNeX1VYiVRR0JC8RizmccEMRrVZVC9IDCF00fohLzNZm')
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Elements stripe={stripePromise}>
          <App/>
      </Elements>
  </StrictMode>,
)
