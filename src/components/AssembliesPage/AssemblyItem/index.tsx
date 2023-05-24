import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AssemblyItem() {
  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
        конфігурація
      </Typography>
      <Card sx={{ maxWidth: 800 }}>
        <div style={{ display: 'flex' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="330"
            image="https://brain.com.ua/static/images/prod_img/0/2/U0210302_3big.jpg"
          />
          <CardContent style={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h6" component="div">
              склад збірки
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <ul style={{ paddingLeft: '16px', marginBottom: 0 }}>
                <li>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </li>
                <li>
                  Lizards are a widespread group of squamate reptiles, with over
                  7,000 species, ranging across all continents except Antarctica
                </li>
                <li>
                  Lizards are a widespread group of squamate reptiles, with over
                  8,000 species, ranging across all continents except Antarctica
                </li>
              </ul>
            </Typography>
          </CardContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardActions>
              <Button size="small" color="success">
                add
              </Button>
            </CardActions>
            <CardActions>
              <Button size="small" color="error">
                delete
              </Button>
            </CardActions>
          </div>
        </div>
      </Card>
    </>
  );
}
