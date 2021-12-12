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
import styles from './Signature.module.css'

import React, {Component} from "react";
import Documentation from "./Documentation";
import SourceLocation from "./SourceLocation";
import {getFormattedFormalParams, getFormattedTypeAndEffect, getFormattedTypeParams, getTypeConstraints} from "./Utils";

class Signature extends Component {
    render() {
        return <div className={styles.signature}>
            <span className="line">
                <span className="keyword def">def</span>
                <span className="name">{this.props.sig.sym.name}</span>
                <span className="tparams">{getFormattedTypeParams(this.props.sig.tparams, false)}</span>
                <span className="fparams">{getFormattedFormalParams(this.props.sig.fparams)}</span>
                {getFormattedTypeAndEffect(this.props.sig.tpe, this.props.sig.eff)}
                {getTypeConstraints(this.props.sig.tcs)}
            </span>
            <SourceLocation loc={this.props.sig.loc}/>
            <Documentation doc={this.props.sig.doc}/>
        </div>
    }
}

export default Signature
