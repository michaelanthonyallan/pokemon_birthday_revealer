import React, {Component} from 'react';
import DateComponent from '../components/DateComponent'
import PokemonContainer from './PokemonContainer'


class DateContainer extends Component {
    constructor(props) {
        super(props);
        this.data = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        this.state = {
            month: null,
            day: null,
            year: null,
        };

        this.handleDatePost = this.handleDatePost.bind(this);
    }



    handleDatePost(date) {
        this.setState({month: date.month});
        this.setState({day: date.date});
        this.setState({year:date.year})
    }

    componentWillReceiveProps(nextProps, nextContext) {
    }


    render(){
        return (
            <div>
                <DateComponent months={this.data} handleDatePost={this.handleDatePost}/>
                <PokemonContainer birthday={this.state}/>
            </div>
        );
    }


}

export default DateContainer;
