import { test, expect, request } from '@playwright/test';

test('API test with headers and payload', async () => {
  // Create request context
  const apiContext = await request.newContext();

  // Send POST request with JSON body and headers
  const response = await apiContext.post('https://reqres.in/api/users', {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1'

    },
    data: {
      name: 'raghav',
      job: 'tester'
    }
  });

  // Assert status code
  expect(response.status()).toBe(201);

  // Parse and assert response content
  const responseBody = await response.json();
  expect(responseBody.name).toBe('raghav'); // optional, based on actual response

  console.log(responseBody);
});


test('API GET Request', async ({ request }) => {
  // Directly use `request` which is already an APIRequestContext
  const response = await request.get('https://reqres.in/api/users/2', {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1'
    }
  });

  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain('Janet');
  console.log(await response.json());
});
