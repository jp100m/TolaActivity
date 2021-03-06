# Generated by Django 2.2.5 on 2019-09-10 18:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('workflow', '0050_using_results_framework_three_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='approvalauthority',
            name='approval_user',
            field=models.ForeignKey(blank=True, help_text='User with Approval Authority', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='auth_approving', to='workflow.TolaUser', verbose_name='Tola User'),
        ),
        migrations.AlterField(
            model_name='approvalauthority',
            name='country',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='workflow.Country', verbose_name='Country'),
        ),
        migrations.AlterField(
            model_name='benchmarks',
            name='agreement',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='workflow.ProjectAgreement', verbose_name='Project Initiation'),
        ),
        migrations.AlterField(
            model_name='benchmarks',
            name='complete',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='workflow.ProjectComplete', verbose_name='Complete'),
        ),
        migrations.AlterField(
            model_name='budget',
            name='agreement',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='workflow.ProjectAgreement', verbose_name='Project Initiation'),
        ),
        migrations.AlterField(
            model_name='checklist',
            name='agreement',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='workflow.ProjectAgreement', verbose_name='Project Initiation'),
        ),
        migrations.AlterField(
            model_name='country',
            name='organization',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='workflow.Organization', verbose_name='organization'),
        ),
        migrations.AlterField(
            model_name='documentation',
            name='project',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='workflow.ProjectAgreement', verbose_name='Project'),
        ),
        migrations.AlterField(
            model_name='historicalbudget',
            name='agreement',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.ProjectAgreement', verbose_name='Project Initiation'),
        ),
        migrations.AlterField(
            model_name='historicalbudget',
            name='complete',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.ProjectComplete', verbose_name='Complete'),
        ),
        migrations.AlterField(
            model_name='historicalprojectagreement',
            name='approval_submitted_by',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.TolaUser', verbose_name='Approval submitted by'),
        ),
        migrations.AlterField(
            model_name='historicalprojectagreement',
            name='approved_by',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.TolaUser', verbose_name='Request approval'),
        ),
        migrations.AlterField(
            model_name='historicalprojectagreement',
            name='checked_by',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.TolaUser', verbose_name='Checked by'),
        ),
        migrations.AlterField(
            model_name='historicalprojectagreement',
            name='estimated_by',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.TolaUser', verbose_name='Originated By'),
        ),
        migrations.AlterField(
            model_name='historicalprojectagreement',
            name='finance_reviewed_by',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.TolaUser', verbose_name='Finance reviewed by'),
        ),
        migrations.AlterField(
            model_name='historicalprojectagreement',
            name='me_reviewed_by',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.TolaUser', verbose_name='M&E Reviewed by'),
        ),
        migrations.AlterField(
            model_name='historicalprojectagreement',
            name='office',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.Office', verbose_name='Office'),
        ),
        migrations.AlterField(
            model_name='historicalprojectagreement',
            name='program',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.Program', verbose_name='Program'),
        ),
        migrations.AlterField(
            model_name='historicalprojectagreement',
            name='project_type',
            field=models.ForeignKey(blank=True, db_constraint=False, max_length=255, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.ProjectType', verbose_name='Project Type'),
        ),
        migrations.AlterField(
            model_name='historicalprojectagreement',
            name='reviewed_by',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.TolaUser', verbose_name='Request review'),
        ),
        migrations.AlterField(
            model_name='historicalprojectagreement',
            name='sector',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.Sector', verbose_name='Sector'),
        ),
        migrations.AlterField(
            model_name='historicalprojectcomplete',
            name='approval_submitted_by',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.TolaUser', verbose_name='Approval submitted by'),
        ),
        migrations.AlterField(
            model_name='historicalprojectcomplete',
            name='approved_by',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.TolaUser', verbose_name='Approved by'),
        ),
        migrations.AlterField(
            model_name='historicalprojectcomplete',
            name='checked_by',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.TolaUser', verbose_name='Checked by'),
        ),
        migrations.AlterField(
            model_name='historicalprojectcomplete',
            name='estimated_by',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.TolaUser', verbose_name='Estimated by'),
        ),
        migrations.AlterField(
            model_name='historicalprojectcomplete',
            name='office',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.Office', verbose_name='Office'),
        ),
        migrations.AlterField(
            model_name='historicalprojectcomplete',
            name='program',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.Program', verbose_name='Program'),
        ),
        migrations.AlterField(
            model_name='historicalprojectcomplete',
            name='project_agreement',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.ProjectAgreement', verbose_name='Project Initiation'),
        ),
        migrations.AlterField(
            model_name='historicalprojectcomplete',
            name='project_type',
            field=models.ForeignKey(blank=True, db_constraint=False, max_length=255, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.ProjectType', verbose_name='Project Type'),
        ),
        migrations.AlterField(
            model_name='historicalprojectcomplete',
            name='reviewed_by',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.TolaUser', verbose_name='Reviewed by'),
        ),
        migrations.AlterField(
            model_name='historicalprojectcomplete',
            name='sector',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.Sector', verbose_name='Sector'),
        ),
        migrations.AlterField(
            model_name='historicalsiteprofile',
            name='admin_level_three',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.AdminLevelThree', verbose_name='Administrative Level 3'),
        ),
        migrations.AlterField(
            model_name='historicalsiteprofile',
            name='approved_by',
            field=models.ForeignKey(blank=True, db_constraint=False, help_text='This is the Provincial Line Manager', null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.TolaUser', verbose_name='Approved by'),
        ),
        migrations.AlterField(
            model_name='historicalsiteprofile',
            name='classify_land',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.LandType', verbose_name='Classify land'),
        ),
        migrations.AlterField(
            model_name='historicalsiteprofile',
            name='country',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.Country', verbose_name='Country'),
        ),
        migrations.AlterField(
            model_name='historicalsiteprofile',
            name='district',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.District', verbose_name='Administrative Level 2'),
        ),
        migrations.AlterField(
            model_name='historicalsiteprofile',
            name='filled_by',
            field=models.ForeignKey(blank=True, db_constraint=False, help_text='This is the originator', null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.TolaUser', verbose_name='Filled by'),
        ),
        migrations.AlterField(
            model_name='historicalsiteprofile',
            name='location_verified_by',
            field=models.ForeignKey(blank=True, db_constraint=False, help_text='This should be GIS Manager', null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.TolaUser', verbose_name='Location verified by'),
        ),
        migrations.AlterField(
            model_name='historicalsiteprofile',
            name='office',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.Office', verbose_name='Office'),
        ),
        migrations.AlterField(
            model_name='historicalsiteprofile',
            name='province',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.Province', verbose_name='Administrative Level 1'),
        ),
        migrations.AlterField(
            model_name='historicalsiteprofile',
            name='type',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='workflow.ProfileType', verbose_name='Type'),
        ),
        migrations.AlterField(
            model_name='monitor',
            name='agreement',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='workflow.ProjectAgreement', verbose_name='Project Initiation'),
        ),
        migrations.AlterField(
            model_name='monitor',
            name='complete',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='workflow.ProjectComplete', verbose_name='complete'),
        ),
        migrations.AlterField(
            model_name='projectcomplete',
            name='program',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='complete', to='workflow.Program', verbose_name='Program'),
        ),
        migrations.AlterField(
            model_name='siteprofile',
            name='country',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='workflow.Country', verbose_name='Country'),
        ),
        migrations.AlterField(
            model_name='tolasites',
            name='site',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='sites.Site', verbose_name='Site'),
        ),
        migrations.AlterField(
            model_name='tolauser',
            name='language',
            field=models.CharField(choices=[('en', 'English'), ('fr', 'French'), ('es', 'Spanish')], default='en', max_length=2),
        ),
        migrations.AlterField(
            model_name='tolauser',
            name='organization',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='workflow.Organization', verbose_name='Organization'),
        ),
    ]
