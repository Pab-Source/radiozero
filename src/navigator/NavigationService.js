import React from 'react';

export const navigatorRef = React.createRef();

export const navigate = route => navigatorRef?.current?.navigate(route);
