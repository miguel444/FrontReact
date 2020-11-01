import {Component} from 'react'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './detalles-item.css'

interface AppProps {

    item: {
        value: string,
        icon_url: string,
        created_at: string

    }
    
}

interface AppState {

    
}



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  
 


export default class DetallesItem extends Component<AppProps,AppState>{
    constructor(props:AppProps){
        super(props)
    }


    render(){
        
        return(
            <div className="details">
            <Card >
            <CardActionArea>
              <CardMedia
                
                image={this.props.item.icon_url}
                title={this.props.item.created_at}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.item.value}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          </div>

        )
    }
    
}