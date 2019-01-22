import React from 'react'
import Input from './input'
class imagefeed extends React.Component {
        constructor(props) {
            super();
            this.state = {
                data: props,
                like: Input[props.index].likes,
                flag: true
            }
            this.noOfLikes = this.noOfLikes.bind(this);

        }
        color = ''
        noOfLikes() {

            if (this.state.flag == true) {
                this.color = "red"

                this.setState({
                    like: this.state.like + 1,
                    flag: false,

                })
                console.log(this.color)
            } else {
                this.color = "white"
                this.setState({
                    like: this.state.like - 1,
                    flag: true,

                })
            }


        }
        render() {
                const styles = {
                    backgroundColor: this.color
                }

                return (
            <div className="image-feed">
                    <img src={this.state.data.imgsrc}/>
                    <p>No of Likes:{this.state.like}</p>
                    <button style={styles} className="like-button" onClick={this.noOfLikes}>Like button</button>
                    
                </div>
        )
    }

}
export default imagefeed;