/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51SKk5xE9UAyDtJBpGDxCekoQIcFifKTUf8oSRkISEsNti8ZGekizfRal2wEvUhlj1Igl3Xhy7knmlgFIMadW9ql400JON9ibSo',
  );
  // 1)  Get checkout session form API
  try {
    const session = await axios({
      method: 'GET',
      url: `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    });
    console.log(session);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
