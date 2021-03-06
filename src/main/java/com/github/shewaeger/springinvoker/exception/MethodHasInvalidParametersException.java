package com.github.shewaeger.springinvoker.exception;

import org.springframework.beans.BeansException;

public class MethodHasInvalidParametersException extends BeansException {

    public MethodHasInvalidParametersException(String msg, Object... args) {
        super(String.format(msg, args));
    }

}
