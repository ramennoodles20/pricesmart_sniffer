import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import StateStore from '../stores/StateStore';

class ItemInfo extends Component {
  render() {
    return (<Grid item="item" xs={12} md={6}>
      <Card >
        <div >
          <CardContent>
            <Typography component="h2" variant="h5">
              Item Information
            </Typography>
            <Grid container="container" spacing={8}>
              <Grid item="item" xs={6}>
                <Typography variant="subtitle1" paragraph="paragraph">
                  Item Number: {StateStore.getActiveItemNumber()}
                </Typography>
                <Typography variant="subtitle1" paragraph="paragraph">
                  Description
                </Typography>
                <Typography variant="subtitle1" paragraph="paragraph">
                  Dept
                </Typography>
              </Grid>
              <Grid item="item" xs={6}>
                <Typography variant="subtitle1" paragraph="paragraph">
                  UOM:
                </Typography>
                <Typography variant="subtitle1" paragraph="paragraph">
                  Club Code:
                </Typography>
                <Typography variant="subtitle1" paragraph="paragraph">
                  Status:
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </div>
      </Card>
    </Grid>)
  }
}

export default ItemInfo;
