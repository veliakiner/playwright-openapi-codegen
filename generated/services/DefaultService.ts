/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * List API versions
     * @returns any 200 response
     * @throws ApiError
     */
    public static listVersionsv2(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
            errors: {
                300: `300 response`,
            }
        }
        );
    }

    /**
     * Show API version details
     * @returns any 200 response
     * @throws ApiError
     */
    public static getVersionDetailsv2(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2'
        });
    }

}
