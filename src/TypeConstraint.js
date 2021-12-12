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

import styles from './TypeConstraint.module.css'

import React, {Component} from "react";

class TypeConstraint extends Component {

    render() {
        return <span className="type-constraint">
            <span className={styles.name}>{this.props.tc.sym.name}</span>
            <span>[</span>
            <span className="type">{this.props.tc.tpe}</span>
            <span>]</span>
        </span>
    }
}

export default TypeConstraint
