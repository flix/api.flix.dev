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
import {getClassNames, getFormattedTypeParams} from "./Utils";
import Documentation from "./Documentation";

class TypeAlias extends Component {

    render() {
        return <div ref={this.props.decl.reactRef}
                    className={getClassNames("box", this.props.activeRef, this.props.decl)}>
            <span className="line">
                <span className="keyword">type alias</span>
                <span className="name">{this.props.decl.sym.name}</span>
                <span>{getFormattedTypeParams(this.props.decl.tparams)}</span>
                <span> = </span>
                <span className="type">{this.props.decl.tpe}</span>
            </span>
            <SourceLocation loc={this.props.decl.loc}/>
            <Documentation doc={this.props.decl.doc}/>
        </div>
    }
}

export default TypeAlias
