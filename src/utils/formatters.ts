export const formatProductFamily = (family: string): string => {
  switch (family) {
    case 'VALUE_FLEX':
      return 'Value Flex';
    case 'STANDARD':
      return 'Standard';
    default:
      return family.charAt(0).toUpperCase() + family.slice(1).toLowerCase().replace(/_/g, ' ');
  }
};