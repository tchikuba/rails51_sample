import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class CardExampleExpandable extends React.Component {
  constructor(props) {
    super(props)
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) }
  }

  render() {
    return (
      <Card>
        <CardHeader
          title="Rails 5.1サンプルアプリ開発"
          subtitle="Rails 5.1を体感する為のサンプルアプリケーションを開発する。"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="完了" />
          <FlatButton label="中止" />
        </CardActions>
        <CardText expandable={true}>
          ・Rails 5.1より採用されたyarn,webpackを用いる<br/>
          ・Reactを採用しReactベースのMaterial-UIを入れてみる
        </CardText>
      </Card>
    )
  }
}


CardExampleExpandable.childContextTypes = {
  muiTheme: PropTypes.object.isRequired
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <CardExampleExpandable />,
    document.body.appendChild(document.createElement('div')),
  )
})
