/**
 * Page model and methods for the TolaActivity home page or
 * dashboard
 * @module DashboardPage
 */
import Page from './page'
import Util from '../lib/testutil'
import { browser } from 'webdriverio'

class DashboardPage extends Page {
  get title () {
    browser.waitForVisible('div.panel.panel-default')

    let panel = browser.$('div.panel.panel-default')
    let header = panel.$('div.panel-heading')
    let h4 = header.$('div.row').$('div.col-md-4').$('h4')
    return h4.getText()
  }
  get CountryDashboardDropdown () { return browser.$('button#dropdownMenu1') }
  get FilterByProgramDropdown () { return browser.$('button#dropdownMenu3') }
  get IndicatorEvidencePanel () { return browser.$('div=Indicator Evidence') }
  get SitesPanel () { return browser.$('p=Sites') }
  get SitesMap () { return browser.$('#map') }
  get ProgramProjectsByStatusPanel () { return browser.$('div#highcharts-0') }
  get ProgramProjectsByStatusChart () { return browser.$('div#highcharts-0').$('svg') }
  get KpiTargetsVsActualsPanel () { return browser.$('div#highcharts-2') }
  get KpiTargetsVsActualsChart () { return browser.$('div#highcharts-2').$('svg') }

  open () {
    let parms = Util.readConfig()
    super.open(parms.baseurl)
  }
}
export default new DashboardPage()