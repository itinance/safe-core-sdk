import chai from 'chai'
import SafeServiceClient from '../src'
import config from './config'

describe('getServiceMasterCopiesInfo', () => {
  const serviceSdk = new SafeServiceClient(config.BASE_URL)

  it('should call getServiceMasterCopiesInfo', async () => {
    const masterCopiesResponse = await serviceSdk.getServiceMasterCopiesInfo()
    chai.expect(masterCopiesResponse.length).to.be.greaterThan(1)
    masterCopiesResponse.map((masterCopy) => {
      chai.expect(masterCopy.deployer).to.be.equal('Gnosis')
    })
  })
})
