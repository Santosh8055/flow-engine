import React from 'react';
import RuleSheet from './../rule-sheet/rule-sheet.js';
import rules from './../rules.js';
import data from './../data.js';

class RuleBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentRule: rules[0],
            orderedRules: []
        };

    }
    componentWillMount() {
        this.prepareOrderedRules();
    }

    getObjectById(array, _id) {
        return array.find(x => x.id === _id);
    }

    prepareOrderedRules = () => {
        if (this.state) {
            var _state = this.state,
                _success = false,
                _nextRuleNumber = 0;


            //determining success of the current rule
            _success = _state.currentRule.body(data);
            _state.currentRule.success = _success ? 'true' : 'false';

            //filling the ordered rules 
            _state.orderedRules.push(_state.currentRule);

            //determining the next rule to be executed 
            _nextRuleNumber = _success ? _state.currentRule.true_id : _state.currentRule.false_id;
            if (_nextRuleNumber && _nextRuleNumber !== null) {
                _state.currentRule = this.getObjectById(rules, _nextRuleNumber);
                //setting the state
                this.setState(_state);
                this.prepareOrderedRules()
            } else {
                this.setState(_state);
            }
        }
    }

    prepareRule(rule, i) {
        return (
            <RuleSheet key={i} rule={rule} success={rule.success}></RuleSheet>
        )
    }

    render = () => {
        return (
            this.state.orderedRules.map((rule, i) => { return this.prepareRule(rule, i) })
        );
    }
}

export default RuleBoard;