class DownloadpdfController < ApplicationController
  def download_pdf
    send_file "#{Rails.root}/app/assets/docs/CV.pdf", type: "application/pdf", x_sendfile: true
  end
end
