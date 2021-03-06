# -*- coding: utf-8 -*-
"""Tests for the Program Page Indicator Serializer

    corresponding to js/pages/program_page/models/ProgramPageIndicator
"""

from factories.workflow_models import RFProgramFactory, SectorFactory, SiteProfileFactory
from factories.indicators_models import RFIndicatorFactory, IndicatorTypeFactory
from indicators.serializers_new import IPTTIndicatorSerializer
from indicators.models import Indicator

from django import test


def get_serialized_data(indicator_pk):
    return IPTTIndicatorSerializer(
        Indicator.rf_aware_objects.filter(pk=indicator_pk), many=True
    ).data[0]


def get_indicator_data(**kwargs):
    return get_serialized_data(RFIndicatorFactory(**kwargs).pk)


class TestIPTTIndicatorSerializer(test.TestCase):

    def test_has_no_sector_pk(self):
        data = get_indicator_data(program=RFProgramFactory())
        self.assertEqual(data['sector_pk'], None)

    def test_has_a_sector_pk(self):
        sector = SectorFactory()
        data = get_indicator_data(program=RFProgramFactory(), sector=sector)
        self.assertEqual(data['sector_pk'], sector.pk)

    def test_has_no_type_pks(self):
        data = get_indicator_data(program=RFProgramFactory())
        self.assertEqual(data['indicator_type_pks'], [])

    def test_has_one_type_pk(self):
        it = IndicatorTypeFactory()
        i = RFIndicatorFactory(program=RFProgramFactory())
        i.indicator_type.add(it)
        data = get_serialized_data(i.pk)
        self.assertEqual(data['indicator_type_pks'], [it.pk])

    def test_has_two_type_pks(self):
        it1 = IndicatorTypeFactory()
        it2 = IndicatorTypeFactory()
        i = RFIndicatorFactory(program=RFProgramFactory())
        i.indicator_type.add(it1)
        i.indicator_type.add(it2)
        data = get_serialized_data(i.pk)
        self.assertEqual(data['indicator_type_pks'], sorted([it1.pk, it2.pk]))

    def test_has_no_site_pks(self):
        data = get_indicator_data(program=RFProgramFactory())
        self.assertEqual(data['site_pks'], [])

    def test_has_one_site_pk(self):
        i = RFIndicatorFactory(
            program=RFProgramFactory(), target_frequency=Indicator.LOP,
            targets=1000, results=True)
        site = SiteProfileFactory()
        i.result_set.first().site.add(site)
        data = get_serialized_data(i.pk)
        self.assertEqual(data['site_pks'], [site.pk])

    def test_has_two_site_pks_one_result(self):
        i = RFIndicatorFactory(
            program=RFProgramFactory(), target_frequency=Indicator.LOP,
            targets=1000, results=True)
        site1 = SiteProfileFactory()
        site2 = SiteProfileFactory()
        i.result_set.first().site.add(site1)
        i.result_set.first().site.add(site2)
        data = get_serialized_data(i.pk)
        self.assertEqual(data['site_pks'], sorted([site1.pk, site2.pk]))

    def test_has_two_site_pks_two_results(self):
        i = RFIndicatorFactory(
            program=RFProgramFactory(), target_frequency=Indicator.LOP,
            targets=1000, results=True, results__count=2)
        site1 = SiteProfileFactory()
        site2 = SiteProfileFactory()
        i.result_set.all()[0].site.add(site1)
        i.result_set.all()[1].site.add(site2)
        data = get_serialized_data(i.pk)
        self.assertEqual(data['site_pks'], sorted([site1.pk, site2.pk]))
