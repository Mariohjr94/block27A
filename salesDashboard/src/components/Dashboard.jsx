import mockTransactions from '../data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';


const Dashboard = () => {
 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent className='card'>
          <PointOfSaleIcon/>
          <Typography gutterBottom variant="h5" component="div">
            12345
          </Typography>
          <Typography variant="body2" color="text.secondary">
        Sales obtained
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Dashboard;