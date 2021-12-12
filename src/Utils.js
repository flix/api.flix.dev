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
import React from "react";
import TypeParam from "./TypeParam";
import FormalParam from "./FormalParam";
import TypeConstraint from "./TypeConstraint";

/**
 * Returns `defaultClass` with the selected class appended if this declaration was clicked.
 */
export function getClassNames(defaultClass, reactRef, decl) {
    let classNames = defaultClass
    if (reactRef === decl.reactRef) {
        return classNames + " selected"
    }
    return classNames
}

/**
 * Returns the given array `fparams` formatted as formal parameters.
 */
export function getFormattedFormalParams(fparams) {
    // Special Case: Unit parameter.
    if (fparams.length === 1 && fparams[0].tpe === "Unit") {
        fparams = []
    }
    let arr = fparams.map((fparam, index) => <FormalParam key={index} fparam={fparam}/>)
    return surround(intersperse(arr, ", "), "(", ")", false)
}

/**
 * Returns the given array `tparams` formatted as type parameters.
 */
export function getFormattedTypeParams(tparams, withKind) {
    let arr = tparams.map((tparam, index) => <TypeParam key={index} tparam={tparam} withKind={withKind}/>)
    return surround(intersperse(arr, ", "), "[", "]", true)
}

/**
 * Returns the formatted type and effect.
 */
export function getFormattedTypeAndEffect(tpe, eff) {
    function getEffectSpacer(eff) {
        if (eff === "true")
            return <span/>
        else
            return <span className="spacer"> &amp; </span>
    }

    function getFormattedEffect(eff) {
        if (eff === "true")
            return <span/>
        else if (eff === "false")
            return <span className="effect">Impure</span>
        else
            return <span className="effect">{eff}</span>
    }

    return <span>
        <span className="result">: <span className="type">{tpe}</span></span>
        <span className="spacer">{getEffectSpacer(eff)}</span>
        <span className="effect">{getFormattedEffect(eff)}</span>
    </span>
}

/**
 * Returns the formatted type constraints.
 */
export function getTypeConstraints(tcs) {
    if (tcs === undefined || tcs.length === 0) {
        return undefined
    }
    let result = intersperse(tcs.map((tc, index) => <TypeConstraint key={index} tc={tc}/>), ", ")
    return <span> <span className="keyword">with</span>{result}</span>
}

/**
 *  Return an array with the separator interspersed between each element of the input array.
 */
export function intersperse(arr, sep) {
    if (arr.length === 0) {
        return [];
    }

    return arr.slice(1).reduce(function (xs, x) {
        return xs.concat([sep, x]);
    }, [arr[0]]);
}

/**
 * Returns the given array of elements surrounded by `a` and `b`.
 */
export function surround(arr, b, e, withEmpty) {
    if (arr.length === 0 && withEmpty)
        return arr;

    const result = [];
    result.push(b);
    arr.forEach(item => result.push(item));
    result.push(e);

    return result;
}
