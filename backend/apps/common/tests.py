from django.test import Client, TestCase
from django.urls import reverse


class HealthEndpointTests(TestCase):
    def setUp(self) -> None:
        self.client = Client()

    def test_health_endpoint_returns_ok(self) -> None:
        response = self.client.get("/health/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"status": "ok"})

    def test_admin_requires_authentication(self) -> None:
        response = self.client.get(reverse("admin:index"))

        self.assertEqual(response.status_code, 302)
        self.assertIn("/admin/login/", response.headers.get("Location", ""))
