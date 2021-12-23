/*
 * Copyright 2021 Magnus Madsen
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import styles from './Menu.module.css'

import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {faDotCircle} from '@fortawesome/free-solid-svg-icons'

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: {}
        }
    }

    notifyReset() {
        this.setState({selected: {}})
    }

    getNamespace(namespace) {
        return <li key={namespace}>
            <button onClick={() => this.onClickMenu(namespace)}>
                <FontAwesomeIcon icon={faChevronRight} className={styles.chevron}/>
                {namespace}
            </button>
        </li>
    }

    getSelectedNamespace(namespace) {
        let classes = this.props.data.classes[namespace] || [];
        let enums = this.props.data.enums[namespace] || [];
        let defs = this.props.data.defs[namespace] || [];
        let typeAliases = this.props.data.typeAliases[namespace] || [];

        return <li key={namespace}>
            <button onClick={() => this.onClickMenu(namespace)}>
                <FontAwesomeIcon icon={faChevronDown} className={styles.chevron}/>
                {namespace}
            </button>
            <ul>
                {classes.map(decl =>
                    <li key={decl.sym.name}>
                        <FontAwesomeIcon icon={faDotCircle} className={styles.iconClass}/>
                        <button onClick={() => this.onClickSubMenu(namespace, decl)}>{decl.sym.name}</button>
                    </li>
                )}
                {enums.map(decl =>
                    <li key={decl.sym.name}>
                        <FontAwesomeIcon icon={faDotCircle} className={styles.iconEnum}/>
                        <button onClick={() => this.onClickSubMenu(namespace, decl)}>{decl.sym.name}</button>
                    </li>
                )}
                {typeAliases.map(decl =>
                    <li key={decl.sym.name}>
                        <FontAwesomeIcon icon={faDotCircle} className={styles.iconTypeAlias}/>
                        <button onClick={() => this.onClickSubMenu(namespace, decl)}>{decl.sym.name}</button>
                    </li>
                )}
                {defs.map(decl =>
                    <li key={decl.sym.name}>
                        <FontAwesomeIcon icon={faDotCircle} className={styles.iconDefn}/>
                        <button onClick={() => this.onClickSubMenu(namespace, decl)}>{decl.name}</button>
                    </li>
                )}
            </ul>
        </li>
    }

    getMenuItems() {
        return this.props.namespaces.map(namespace =>
            (this.isSelected(namespace)) ? this.getSelectedNamespace(namespace) : this.getNamespace(namespace)
        )
    }

    isSelected(namespace) {
        return this.state.selected[namespace];
    }

    onClickMenu(namespace) {
        let newState = {...this.state.selected}
        if (this.isSelected(namespace)) {
            newState[namespace] = false
            this.setState({selected: newState})
        } else {
            newState[namespace] = true
            this.setState({selected: newState})
        }
        this.props.notifyChangeNameSpace(namespace, undefined)
    }

    onClickSubMenu(namespace, decl) {
        this.props.notifyChangeNameSpace(namespace, decl.reactRef)
    }

    render() {
        return (
            <div className={styles.menu + " d-print-none"}>
                <div>
                    <span onClick={() => this.notifyReset()} className={styles.logo}>flix</span>
                    <span className={styles.version}>{this.props.data.version}</span>
                </div>
                <ul>
                    {this.getMenuItems()}
                </ul>
            </div>
        );
    }
}

export default Menu;
