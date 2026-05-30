// =====================================================
// MANDAAR — SITE CONFIG
// Single source of truth for site-wide constants.
// Edit values here once, they flow everywhere.
// =====================================================

export const SITE = {
  name: "Mandaar",
  tagline: "Udaipur's finest dry fruits",
  foundingYear: 2018,
  location: "Udaipur, Rajasthan",
  city: "Udaipur",
  state: "Rajasthan",
  pincode: "313001",
  address: {
    line1: "Shop No. 406, Bhupalpura Main Road, Udaipole",
    line2: "Near Gattani Hospital, Udaipur - 313001",
    line3: "Rajasthan, India",
  },
  delivery: {
    minOrderFreeShipping: 999,
    shippingDays: "2-4 days",
  },
};

// =====================================================
// DYNAMIC HELPERS - call these in components, never hardcode
// =====================================================

/** Returns the current calendar year (e.g. 2026). */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/** Returns how many years the shop has been operating (e.g. 8 in 2026). */
export function getYearsSinceFounding(): number {
  return getCurrentYear() - SITE.foundingYear;
}
