require 'spec_helper'

describe ProtocolsController do

    describe '#given a user that wants to add a new Protocol' do
        render_views          

        context 'new' do
            subject do
                get :new
            end
        
            it 'shows an empty form' do            
                response.should be_success
            end
        end

        context 'create' do
            fixtures :protocols
        
            subject do
                Protocol.any_intance.stubs(:valid?).returns(true)            
                post 'create'                
            end

            it 'shows a success message' do
                flash[:notice].should_not be_nil
            end
            
            it 'redirects the user to a list of protocols' do
                response.should redirect_to(protocols_url)
            end
        end       
    end

=begin
  def mock_protocol(stubs={})
    (@mock_protocol ||= mock_model(Protocol).as_null_object).tap do |protocol|
      protocol.stub(stubs) unless stubs.empty?
    end
  end
 
  describe "GET index" do
    it "assigns all protocols as @protocols" do
      Protocol.stub(:all) { [mock_protocol] }
      get :index
      assigns(:protocols).should eq([mock_protocol])
    end
  end

  describe "GET show" do
    it "assigns the requested protocol as @protocol" do
      Protocol.stub(:find).with("37") { mock_protocol }
      get :show, :id => "37"
      assigns(:protocol).should be(mock_protocol)
    end
  end

  describe "GET new" do
    it "assigns a new protocol as @protocol" do
      Protocol.stub(:new) { mock_protocol }
      get :new
      assigns(:protocol).should be(mock_protocol)
    end
  end

  describe "GET edit" do
    it "assigns the requested protocol as @protocol" do
      Protocol.stub(:find).with("37") { mock_protocol }
      get :edit, :id => "37"
      assigns(:protocol).should be(mock_protocol)
    end
  end

  describe "POST create" do

    describe "with valid params" do
      it "assigns a newly created protocol as @protocol" do
        Protocol.stub(:new).with({'these' => 'params'}) { mock_protocol(:save => true) }
        post :create, :protocol => {'these' => 'params'}
        assigns(:protocol).should be(mock_protocol)
      end

      it "redirects to the created protocol" do
        Protocol.stub(:new) { mock_protocol(:save => true) }
        post :create, :protocol => {}
        response.should redirect_to(protocol_url(mock_protocol))
      end
    end

    describe "with invalid params" do
      it "assigns a newly created but unsaved protocol as @protocol" do
        Protocol.stub(:new).with({'these' => 'params'}) { mock_protocol(:save => false) }
        post :create, :protocol => {'these' => 'params'}
        assigns(:protocol).should be(mock_protocol)
      end

      it "re-renders the 'new' template" do
        Protocol.stub(:new) { mock_protocol(:save => false) }
        post :create, :protocol => {}
        response.should render_template("new")
      end
    end

  end

  describe "PUT update" do

    describe "with valid params" do
      it "updates the requested protocol" do
        Protocol.should_receive(:find).with("37") { mock_protocol }
        mock_protocol.should_receive(:update_attributes).with({'these' => 'params'})
        put :update, :id => "37", :protocol => {'these' => 'params'}
      end

      it "assigns the requested protocol as @protocol" do
        Protocol.stub(:find) { mock_protocol(:update_attributes => true) }
        put :update, :id => "1"
        assigns(:protocol).should be(mock_protocol)
      end

      it "redirects to the protocol" do
        Protocol.stub(:find) { mock_protocol(:update_attributes => true) }
        put :update, :id => "1"
        response.should redirect_to(protocol_url(mock_protocol))
      end
    end

    describe "with invalid params" do
      it "assigns the protocol as @protocol" do
        Protocol.stub(:find) { mock_protocol(:update_attributes => false) }
        put :update, :id => "1"
        assigns(:protocol).should be(mock_protocol)
      end

      it "re-renders the 'edit' template" do
        Protocol.stub(:find) { mock_protocol(:update_attributes => false) }
        put :update, :id => "1"
        response.should render_template("edit")
      end
    end

  end

  describe "DELETE destroy" do
    it "destroys the requested protocol" do
      Protocol.should_receive(:find).with("37") { mock_protocol }
      mock_protocol.should_receive(:destroy)
      delete :destroy, :id => "37"
    end

    it "redirects to the protocols list" do
      Protocol.stub(:find) { mock_protocol }
      delete :destroy, :id => "1"
      response.should redirect_to(protocols_url)
    end
  end
=end

end
