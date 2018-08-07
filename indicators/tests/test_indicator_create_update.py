from unittest import skip

from django.test import TestCase, RequestFactory, Client
from django.urls import reverse_lazy

from factories import UserFactory
from factories.indicators_models import (IndicatorFactory)
from factories.workflow_models import (ProgramFactory, TolaUserFactory)


class TestBase(TestCase):
    fixtures = ['indicatortype.json', 'levels.json']

    def setUp(self):
        self.user = UserFactory(first_name="Indicator", last_name="CreateTest", username="IC")
        self.user.set_password('password')
        self.user.save()
        self.tola_user = TolaUserFactory(user=self.user)
        self.request_factory = RequestFactory()
        self.country = self.tola_user.country
        self.program = ProgramFactory()
        self.indicator = IndicatorFactory(program=self.program)
        print 'indicator', self.indicator

        self.client = Client()
        self.client.login(username="IC", password='password')


class IndicatorCreateFunctionTests(TestBase):

    def setUp(self):
        super(IndicatorCreateFunctionTests, self).setUp()

    def test_get(self):
        url = reverse_lazy('indicator_create', args=[self.program.id])
        response = self.client.get(url)

        self.assertContains(response, 'Indicator Performance Tracking Table')
        self.assertTemplateUsed(response, 'indicators/indicator_create.html')

    def test_post(self):
        request_content = {
            'program': self.program.id, 'country': self.country.id, 'services': 0, 'service_indicator': 0}
        response = self.client.post('/indicators/indicator_create/%s/' % self.program.id, request_content)

        self.assertEqual(response.status_code, 302)


class IndicatorUpdateTests(TestBase):

    def setUp(self):
        super(IndicatorUpdateTests, self).setUp()

    def test_get(self):
        url = reverse_lazy('indicator_update', args=[self.indicator.id])
        response = self.client.get(url)

        self.assertContains(response, 'Indicator Performance Tracking Table')
        self.assertTemplateUsed(response, 'indicators/indicator_form.html')

    def test_post(self):

        # build form data using URL encoded form key value pairs
        data = {
            'name': 'Test+Name',
            'program2': self.program.name,
            'level': 1,
            'indicator_type': 1,
            'unit_of_measure_type': 1,
            'lop_target': 3223,
        }
        request = RequestFactory()
        request.user = self.user

        url = reverse_lazy('indicator_update', args=[self.indicator.id])
        response = self.client.post(url, data)

        self.assertEqual(response.status_code, 200)
