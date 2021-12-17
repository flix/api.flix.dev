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

import {getClassNames} from "./Utils";
import Instance from "./Instance";
import TypeParam from "./TypeParam";
import SourceLocation from "./SourceLocation";
import Signature from "./Signature";
import Documentation from "./Documentation";

class Class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sigs: true,
            defs: false,
            instances: false
        }
    }

    toggleSignatures() {
        this.setState({sigs: !this.state.sigs})
    }

    toggleDefinitions() {
        this.setState({defs: !this.state.defs})
    }

    toggleInstances() {
        this.setState({instances: !this.state.instances})
    }

    getSignatures() {
        if (!this.state.sigs) {
            return <div>
                <h6>Signatures <button className="small link-primary"
                                       onClick={() => this.toggleSignatures()}>(show)</button>
                </h6>
            </div>
        } else {
            return <div>
                <h6>Signatures <button className="small link-primary"
                                       onClick={() => this.toggleSignatures()}>(hide)</button>
                </h6>
                <div>
                    {this.props.decl.sigs.map(sig => <Signature key={sig.sym.name} sig={sig}/>)}
                </div>
            </div>
        }
    }

    getDefinitions() {
        let defs = this.props.decl.defs;
        if (defs === undefined || defs.length === 0) {
            return undefined
        }

        if (!this.state.defs) {
            return <div>
                <h6>Definitions <button className="small link-primary"
                                        onClick={() => this.toggleDefinitions()}>(show)</button>
                </h6>
            </div>
        } else {
            return <div>
                <h6>Definitions <button className="small link-primary"
                                        onClick={() => this.toggleDefinitions()}>(hide)</button>
                </h6>
                <div>
                    {defs.map(sig => <Signature key={sig.sym.name} sig={sig}/>)}
                </div>
            </div>
        }
    }

    getInstances() {
        if (!this.state.instances) {
            return <div>
                <h6>Instances <button className="small link-primary"
                                      onClick={() => this.toggleInstances()}>(show)</button>
                </h6>
            </div>
        } else {
            return <div>
                <h6>Instances <button className="small link-primary"
                                      onClick={() => this.toggleInstances()}>(hide)</button>
                </h6>
                <div>
                    {this.props.decl.instances.map(inst => <Instance inst={inst}/>)}
                </div>
            </div>
        }
    }

    render() {
        return <div ref={this.props.decl.reactRef}
                    className={getClassNames("box", this.props.activeRef, this.props.decl)}>
            <span className="line">
                <span className="keyword">class</span>
                <span className="name">{this.props.decl.sym.name}</span>
                <span className="tparams">[<TypeParam tparam={this.props.decl.tparam}/>]</span>
            </span>
            <SourceLocation loc={this.props.decl.loc}/>
            <Documentation doc={this.props.decl.doc}/>
            <hr/>
            {this.getSignatures()}
            <hr/>
            {this.getDefinitions()}
            <hr/>
            {this.getInstances()}
        </div>
    }
}

export default Class
