import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import StateStore from '../stores/StateStore';

class ItemInfo extends Component {
  render() {
    return (<Grid item="item" xs={12} md={6}>
      <Card >
        <div >
          <CardContent>
            <Typography component="h2" variant="h5">
              Buyer Information
            </Typography>
                <Typography variant="subtitle1" paragraph="paragraph">
                  Buyer
                </Typography>
                <Typography variant="subtitle1" paragraph="paragraph">
                  Planner
                </Typography>
                <Typography variant="subtitle1" paragraph="paragraph">
                  Vendor
                </Typography>

          </CardContent>
        </div>
      </Card>
    </Grid>)
  }
}

export default ItemInfo;
