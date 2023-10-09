import { test as base, expect } from '@playwright/test';
import {DefaultService} from '../generated/services/DefaultService'
const test = base.extend<{ requestContext: any }>({
  requestContext: async ({ page, request }, use) => {
    await use(request)
  },
});
test.only('get started link', async ({ requestContext }) => {
  const resp = await requestContext.get("https://google.com")
  expect(resp.status()).toEqual(200)
  const resp2 = await DefaultService.listVersionsv2()
  expect(resp2.status()).toEqual(200)
});
