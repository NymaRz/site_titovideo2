import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('VOTRE_CLE_PUBLIQUE_STRIPE');

export default stripePromise;