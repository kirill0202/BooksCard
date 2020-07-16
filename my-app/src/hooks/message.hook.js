import React from 'react'
import { useCallback } from 'react';
import Alert from '../components/Alert/Alert';

const useMessage = () => {
    return useCallback(text => {
        return (
            <>
              <Alert text={text}/>
            </>
        )
    },[])
}
export default useMessage;