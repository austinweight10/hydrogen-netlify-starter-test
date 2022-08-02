import{R as $,r as d,e as l,f as g}from"./index.6189f3cc.js";import{u as f}from"./555f9022.js";import"./d918c967.js";import{f as h}from"./92add5bc.js";const Z=t=>`
mutation CartLineAdd($cartId: ID!, $lines: [CartLineInput!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,F=t=>`
mutation CartCreate($input: CartInput!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartCreate(input: $input) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,x=t=>`
mutation CartLineRemove($cartId: ID!, $lines: [ID!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartLinesRemove(cartId: $cartId, lineIds: $lines) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,k=t=>`
mutation CartLineUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,_=t=>`
mutation CartNoteUpdate($cartId: ID!, $note: String, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartNoteUpdate(cartId: $cartId, note: $note) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,O=t=>`
mutation CartBuyerIdentityUpdate(
  $cartId: ID!
  $buyerIdentity: CartBuyerIdentityInput!
  $numCartLines: Int = 250
  $country: CountryCode = ZZ
) @inContext(country: $country) {
  cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,R=t=>`
mutation CartAttributesUpdate($attributes: [AttributeInput!]!, $cartId: ID!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,T=t=>`
mutation CartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!], $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,v=t=>`
query CartQuery($id: ID!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cart(id: $id) {
    ...CartFragment
  }
}

${t}
`,b=`
fragment CartFragment on Cart {
  id
  checkoutUrl
  totalQuantity
  buyerIdentity {
    countryCode
    customer {
      id
      email
      firstName
      lastName
      displayName
    }
    email
    phone
  }
  lines(first: $numCartLines) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          compareAtAmountPerQuantity {
            amount
            currencyCode
          }
        }
        merchandise {
          ... on ProductVariant {
            id
            availableForSale
            compareAtPriceV2 {
              ...MoneyFragment
            }
            priceV2 {
              ...MoneyFragment
            }
            requiresShipping
            title
            image {
              ...ImageFragment
            }
            product {
              handle
              title
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
  cost {
    subtotalAmount {
      ...MoneyFragment
    }
    totalAmount {
      ...MoneyFragment
    }
    totalDutyAmount {
      ...MoneyFragment
    }
    totalTaxAmount {
      ...MoneyFragment
    }
  }
  note
  attributes {
    key
    value
  }
  discountCodes {
    code
  }
}

fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}
`;function I(){const{storeDomain:t,storefrontApiVersion:e,storefrontToken:o,storefrontId:n}=f();return $.useCallback(({query:i,variables:s})=>{const r={"Content-Type":"application/json","X-SDK-Variant":"hydrogen","X-SDK-Version":e,[l]:o};return n&&(r[g]=n),fetch(`https://${t}/api/${e}/graphql.json`,{method:"POST",headers:r,body:JSON.stringify({query:i.toString(),variables:s})}).then(a=>a.json()).catch(a=>({data:void 0,error:a.toString()}))},[t,e,o,n])}function L(){const[t,e]=d.exports.useState(),[o,n]=d.exports.useState(),[i,s]=d.exports.useState(),r=I(),a=$.useCallback(async p=>{var y,m;const{data:u,errors:C}=await r({query:F(b),variables:{input:p}});if(C&&(s(C),e(void 0),n(void 0)),(y=u==null?void 0:u.cartCreate)!=null&&y.cart){const c=u.cartCreate.cart;e({...c,lines:h(c.lines),note:(m=c.note)!=null?m:void 0}),n(c.checkoutUrl)}},[r]);return{cart:t,checkoutUrl:o,error:i,createInstantCheckout:a}}var N=Object.freeze(Object.defineProperty({__proto__:null,useCartFetch:I,useInstantCheckout:L},Symbol.toStringTag,{value:"Module"}));export{v as C,F as a,Z as b,x as c,k as d,_ as e,O as f,R as g,T as h,b as i,N as j,I as u};
//# sourceMappingURL=737d4b55.js.map
