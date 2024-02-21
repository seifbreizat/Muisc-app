import  React from 'react';
import {useEffect, useState} from 'react';


const SubscriptionForm =() => {
    
    const [Email, setEmail] =  useState ("");

    const [paymentMethod, setPaymentMethod] =  useState ("");

    const [Subscription, setsubscription] =  useState ("");



    const handleEmailChange = (e) => {
    setEmail(e.target.value);
    };


    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
        };
    const handleSubscription = async () => {
        useEffect(() => {
            setLoading(true)
            fetch(
              `https://api..com/`
            )
              .then((response) => response.json())
              .then(createSubscription);
          }, []);
          if (Subscription)
            return (
              <pre>{JSON.stringify(Subscription, null, 2)}</pre>
            );
          return <h1>Subscription</h1>;
            }
            if (error)
    return <pre>{JSON.stringify(error)}</pre>;
    };

    
    
/*
// useEffect(() => {
    fetch(
      `https://api.github.com/users/moonhighway`
    )
      .then((response) => response.json())
      .then(setMusic);
  }, []);
  if (music)
    return (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    );
  return <h1>music</h1>;
    }
    */ 