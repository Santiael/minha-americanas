import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.lightestGray,
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  productInfo: {
    flex: 1,
    marginHorizontal: 15,
  },
  productTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    color: colors.primaryColor,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountUnit: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 3,
    backgroundColor: colors.lightestGray,
  },
  unitText: {
    color: colors.primaryColor,
  },
});
