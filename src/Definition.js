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
import React, {Component} from 'react';
import SourceLocation from "./SourceLocation";

import {
    getClassNames,
    getFormattedFormalParams,
    getFormattedTypeParams,
    getFormattedTypeAndEffect,
    getTypeConstraints
} from "./Utils";
import Documentation from "./Documentation";
import Annotation from "./Annotation";

class Definition extends Component {

    getAnnotations() {
        let annotations = this.props.decl.ann;
        if (annotations === undefined || annotations.length === 0) {
            return undefined
        }
        return <div>
            {annotations.map((a, index) => <Annotation key={index} annotation={a}/>)}
        </div>
    }

    render() {
        return <div ref={this.props.decl.reactRef}
                    className={getClassNames("box", this.props.activeRef, this.props.decl)}>
            <div>
                {this.getAnnotations()}
                <span className="line">
                    <span className="keyword def">def</span>
                    <span className="name">{this.props.decl.name}</span>
                    <span className="tparams">{getFormattedTypeParams(this.props.decl.tparams, false)}</span>
                    <span className="fparams">{getFormattedFormalParams(this.props.decl.fparams)}</span>
                    {getFormattedTypeAndEffect(this.props.decl.tpe, this.props.decl.eff)}
                    {getTypeConstraints(this.props.decl.tcs)}
                </span>
                <SourceLocation loc={this.props.decl.loc}/>
            </div>
            <Documentation doc={this.props.decl.doc}/>
        </div>
    }

}

export default Definition
