import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import { Link, generatePath } from 'react-router-dom';
import { AssemblyPartType } from '../../../../types';
import {
  IconByCategory,
  ProductCategories,
  ROUTES,
} from '../../../common/constants';
import useStyles from './styles';

type AssemblyPartProps = {
  product: AssemblyPartType;
};

const AssemblyPart: React.FC<AssemblyPartProps> = ({ product }) => {
  const styles = useStyles();

  const Icon = IconByCategory[product.category];

  const title = ProductCategories[product.category].builderTitle;

  return (
    <Box className={styles.mainBox}>
      <Box className={styles.leftBlock}>
        <Box className={styles.titleBox}>
          <Icon />
          <Typography>{title}</Typography>
        </Box>
        <Box className={styles.infoBox}>
          <img
            alt={product.name}
            src={product.mainImage}
            className={styles.image}
          />
          <Link
            style={{ textDecoration: 'none' }}
            to={generatePath(ROUTES.PRODUCT, {
              category: product.category,
              id: product.id,
            })}
          >
            <Tooltip title={product.name}>
              <Typography className={styles.typo}>{product.name}</Typography>
            </Tooltip>
          </Link>
        </Box>
      </Box>
      <Box className={styles.priceBox}>
        <Typography variant="h3" color="secondary">
          {`${product.price.range.minPrice.toLocaleString()} ₴ -
                ${product.price.range.maxPrice.toLocaleString()} ₴`}
        </Typography>
      </Box>
    </Box>
  );
};

export default AssemblyPart;
