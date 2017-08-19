import React from 'react';
import { List, Header, Accordion } from 'semantic-ui-react';

const SecActivities = () =>
  <div>
    <Header as="h3" dividing>
      Secondary Activities
    </Header>

    <List divided relaxed>
      <List.Item>
        <List.Icon name="book" />
        <List.Content>
          <List.Header>2010</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <Accordion>
                  <Accordion.Title>
                    <List.Header>
                      MOSS/WCM SP07 website UMC st.Radboud uitgeroepen tot beste
                      ziekenhuiswebsite van nederland! @ Tamtam
                    </List.Header>
                  </Accordion.Title>
                  <Accordion.Content>
                    <List.Description>
                      (www.umcn.nl) volgens www.zorgwebmonitor.nl
                    </List.Description>
                  </Accordion.Content>
                </Accordion>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="book" />
        <List.Content>
          <List.Header>2009</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <Accordion>
                  <Accordion.Title>
                    <List.Header>
                      SharePointMagazine publicaties @ Tamtam
                    </List.Header>
                  </Accordion.Title>
                  <Accordion.Content>
                    <List.Description>
                      Verschillende publicaties geschreven over SharePoint’s
                      2007 Branding Limitations. www.sharepointmagazine.net
                    </List.Description>
                  </Accordion.Content>
                </Accordion>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="book" />
        <List.Content>
          <List.Header>2009</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <Accordion>
                  <Accordion.Title>
                    <List.Header>
                      Blog over front-end development voor SharePoint 2007 @
                      Tamtam
                    </List.Header>
                  </Accordion.Title>
                  <Accordion.Content>
                    <List.Description>www.tamtam.nl</List.Description>
                  </Accordion.Content>
                </Accordion>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="book" />
        <List.Content>
          <List.Header>2006</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <List.Header>
                  Hands-on training for Flash @ Haagse Hogeschool/TH Rijswijk
                </List.Header>
                <List.Description />
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="book" />
        <List.Content>
          <List.Header>2004 - 2005</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <Accordion>
                  <Accordion.Title>
                    <List.Header>
                      Kampleider introductiekamp informatica @ Haag Uit.
                    </List.Header>
                  </Accordion.Title>
                  <Accordion.Content>
                    <List.Description>www.haaguit.com </List.Description>
                  </Accordion.Content>
                </Accordion>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
    </List>
  </div>;

export default SecActivities;
