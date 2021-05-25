import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class MemoNew extends Component {

    // Fieldで入力される値をrenderFieldの引数にしている。　labelなら<Field label="title">のtitleが渡ってくる。
  renderField({ input, type, label, meta: { touched, error }}) {
    
    return (
      <div>
          <input {...input} placeholder={label} type={type} />
          { touched && error && <span>{error}</span>}
      </div>
    )
  } 

  render() {
    let style = { 
        padT: { paddingTop: 10},
        padL: { paddingLeft: 5},
    }
    return (
      <React.Fragment>
        <form style={style.padL}>
          <div style={style.padT}><Field label="title" name="title" type="text" component={this.renderField} /></div>
          <div><Field label="memo" name="memo" type="text" component={this.renderField} /></div>
          <div style={style.padR}>
            <input type="submit" value="Create" />
            <Link to="/" style={style.padL} >Back</Link>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const validate = values => {
    const errors = {}
    
    if (!values.title) errors.title = "fill in this area"

    return errors
}

// const mapDispatchToProps = ({  })

// decorate with redux-form
// validateなしでも動く。
export default connect(null, null)(
    reduxForm({ validate, form: 'memoNewForm' })(MemoNew)
);









