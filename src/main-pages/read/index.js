import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../common/header/index.js';
import Footer from '../../common/footer/index.js';
import Article from './components/article.js';
import Writter from './components/writter.js';
import Comment from './components/comment.js';
import {
	ReadWrapper,
} from './style.js';

class Read extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<div className="bgc" style={{backgroundColor: '#F7F7F7', paddingBottom: '30px'}}>
					<ReadWrapper>
						<div className="article-and-writter">
							<Article id={this.props.match.params.id}/>
							<Writter id={this.props.match.params.id}/>
						</div>
						<Comment id={this.props.match.params.id}/>

					</ReadWrapper>
				</div>
				<Footer />
			</Fragment>
    	)
	}
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Read);