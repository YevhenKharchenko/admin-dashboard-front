export const getLocationTitle = location => {
  switch (location) {
    case '/dashboard':
      return 'Dashboard';
    case '/orders':
      return 'All orders';
    case '/products':
      return 'All products';
    case '/suppliers':
      return 'All suppliers';
    case '/customers':
      return 'All customers';
    default:
      return 'Home';
  }
};
