import {useRef, useEffect} from 'react';
import {useScroll} from 'react-use';
import {
  useCart,
  CartLineProvider,
  CartShopPayButton,
  Money,
  ClientAnalytics,
} from '@shopify/hydrogen';

import {Button, Text, CartLineItem, CartEmpty} from '~/components';

export const eventNames = {
  PAGE_VIEW: 'page-view',
  VIEWED_PRODUCT: 'viewed-product',
  ADD_TO_CART: 'add-to-cart',
  REMOVE_FROM_CART: 'remove-from-cart',
  UPDATE_CART: 'update-cart',
  DISCOUNT_CODE_UPDATED: 'discount-code-updated',
  PERFORMANCE: 'performance'
}

export function CartDetails({layout, onClose}) {
  const {lines} = useCart();
  const scrollRef = useRef(null);
  const {y} = useScroll(scrollRef);


  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    console.log(eventNames.PAGE_VIEW, 'PAGE_VIEW')
    ClientAnalytics.publish(eventNames.PAGE_VIEW, {
      // eslint-disable-next-line prettier/prettier
        testData: "this is a test",
        // eslint-disable-next-line prettier/prettier
        creative_slot: "featured_app_1",
        url: 'test',
        path: 'asdsadasdas',
        search: '/asdasd',
        referrer: 'adsadsadsadsads',
    });
    ClientAnalytics.publish(eventNames.VIEWED_PRODUCT, {
      // eslint-disable-next-line prettier/prettier
        testData: "this is a test",
        // eslint-disable-next-line prettier/prettier
        creative_slot: "featured_app_1",
    });
    ClientAnalytics.publish(eventNames.ADD_TO_CART, {
      // eslint-disable-next-line prettier/prettier
        testData: "this is a test",
        // eslint-disable-next-line prettier/prettier
        creative_slot: "featured_app_1",
    });
    ClientAnalytics.publish(eventNames.REMOVE_FROM_CART, {
      // eslint-disable-next-line prettier/prettier
        testData: "this is a test",
        // eslint-disable-next-line prettier/prettier
        creative_slot: "featured_app_1",
    });
    ClientAnalytics.publish(eventNames.UPDATE_CART, {
      // eslint-disable-next-line prettier/prettier
        testData: "this is a test",
        // eslint-disable-next-line prettier/prettier
        creative_slot: "featured_app_1",
    });
    ClientAnalytics.publish(eventNames.DISCOUNT_CODE_UPDATED, {
      // eslint-disable-next-line prettier/prettier
        testData: "this is a test",
        // eslint-disable-next-line prettier/prettier
        creative_slot: "featured_app_1",
    });
    ClientAnalytics.publish(eventNames.PERFORMANCE, {
      // eslint-disable-next-line prettier/prettier
        testData: "this is a test",
        // eslint-disable-next-line prettier/prettier
        creative_slot: "featured_app_1",
    });
  })



  if (lines.length === 0) {
    return <CartEmpty onClose={onClose} />;
  }

  const container = {
    drawer: 'grid grid-cols-1 h-screen-no-nav grid-rows-[1fr_auto]',
    page: 'pb-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start gap-4 md:gap-8 lg:gap-12',
  };

  const content = {
    drawer: 'px-6 pb-6 sm-max:pt-2 overflow-auto transition md:px-12',
    page: 'flex-grow md:translate-y-4',
  };

  const summary = {
    drawer: 'grid gap-6 p-6 border-t md:px-12',
    page: 'sticky top-nav grid gap-6 p-4 md:px-6 md:translate-y-4 bg-primary/5 rounded w-full max-w-md',
  };

  return (
    <form className={container[layout]}>
      <section
        ref={scrollRef}
        aria-labelledby="cart-contents"
        className={`${content[layout]} ${y > 0 && 'border-t'}`}
      >
        <ul className="grid gap-6 md:gap-10">
          {lines.map((line) => {
            return (
              <CartLineProvider key={line.id} line={line}>
                <CartLineItem />
              </CartLineProvider>
            );
          })}
        </ul>
      </section>
      <section aria-labelledby="summary-heading" className={summary[layout]}>
        <h2 id="summary-heading" className="sr-only">
          Order summary
        </h2>
        <OrderSummary />
        <CartCheckoutActions />
      </section>
    </form>
  );
}

function CartCheckoutActions() {
  const {checkoutUrl} = useCart();
  return (
    <>
      <div className="grid gap-4">
        <Button to={checkoutUrl} width="full">
          Continue to Checkout
        </Button>
        <CartShopPayButton />
      </div>
    </>
  );
}

function OrderSummary() {
  const {cost} = useCart();
  return (
    <>
      <dl className="grid">
        <div className="flex items-center justify-between font-medium">
          <Text as="dt">Subtotal</Text>
          <Text as="dd">
            {cost?.subtotalAmount?.amount ? (
              <Money data={cost?.subtotalAmount} />
            ) : (
              '-'
            )}
          </Text>
        </div>
      </dl>
    </>
  );
}
