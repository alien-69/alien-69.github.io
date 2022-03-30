export const gaEvents = {
  connect_wallet: "connect_wallet",
  disconnect_wallet: "disconnect_wallet",
  click_create: "click_create",
  click_cancel: "user_cancel",
  success: "success",
  view_bscscan: "view_bscscan",
  copy_token_address: "copy_token_address",
  click_standard: "select_standard",
  click_safemoon: "select_safemoon",
  click_liquidity_generator: "select_liquidity_generator",
  click_frictionless_yield: "select_frictionless_yield",
  click_reward_token: "select_reward_token",
  click_customized_token: "select_customized_token",
  create_standard: "select_standard",
  create_safemoon: "select_safemoon",
  create_liquidity_generator: "select_liquidity_generator",
  create_frictionless_yield: "select_frictionless_yield",
  create_reward_token: "select_reward_token",
  select_mintable: "select_mintable",
  select_burnable: "select_burnable",
  select_mintandburn: "select_mintandburn",
  select_honeypot: "select_honeypot",
  select_deflationary: "select_deflationary",
  click_contact_us: "click_contact_us",
};

export function logGaEvent(event_name) {
  if (
    !window.location.toString().includes("127.0.0.1") &&
    !window.location.toString().includes("localhost") &&
    !window.location.toString().includes("192.168.")
  ) {
    gtag("event", event_name);
  }
}
